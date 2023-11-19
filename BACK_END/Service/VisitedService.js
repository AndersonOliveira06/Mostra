import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

class VisitedService {

    static addLocalVisitado = (pontoTuristicoId, callback) => {
        const db = getFirestore()
        const lugaresVisitadosCollection = collection(db, "visitados")

        const auth = getAuth()
        const user = auth.currentUser
        const userUID = user.uid.toString()

        if (user !== null) {
            const novoLocalVisitado = {
                star_id: pontoTuristicoId,
                user_id: userUID,
            }

            addDoc(lugaresVisitadosCollection, novoLocalVisitado)
                .then(
                    (document) => {
                        callback(`Local visitado com id ${document.id} adicionado com sucesso pelo usuário com id ${userUID}`)
                    }
                )
                .catch((error) => console.log("Erro ao adicionar local visitado: ", error))
        }

        console.log("Não existe usuário logado")
    }

    static getLocalVisitadoByUser = (callback) => {
        const db = getFirestore()
        const lugaresVisitadosCollection = collection(db, "visitados")

        const auth = getAuth()
        const user = auth.currentUser
        const userUID = user.uid.toString()

        if (user !== null) {
            const q = query(lugaresVisitadosCollection, where("user_id", "===", userUID))

            getDocs(q)
                .then(
                    (snapshot) => {
                        const lugaresVisitados = []
                        const lugaresTuristicosCollection = collection(db, "star")

                        snapshot.forEach(
                            (document) => {
                                //const id = document.id
                                const { star_id, user_id } = document.data()

                                const c = query(lugaresTuristicosCollection, where("id", "==", star_id))

                                getDocs(c)
                                    .then(
                                        (querySnapshot) => {
                                            const doc = querySnapshot.docs[0]
                                            const { descricao, fotos, localizacao, nome } = doc.data()
                                            lugaresVisitados.push({ star_id, user_id, nome, descricao, fotos, localizacao })
                                        }
                                    )
                                    .catch((error) => console.log("Erro ao comparar os IDs: ", error))
                            }
                        )

                        callback(lugaresVisitados)
                    }
                )
                .catch(error => console.log("Erro ao tentar pegar os dados do Firestore: ", error))
        }

        console.log("Não existe usuário logado")
    }

    static deleteLugaresVisitadosByUser = (pontoTuristicoId, callback) => {
        const db = getFirestore()
        const lugaresVisitadosCollection = collection(db, "visitados")

        const auth = getAuth()
        const user = auth.currentUser
        const userUID = user.uid.toString()

        if (user !== null) {
            const q = query(lugaresVisitadosCollection, where("user_id", "===", userUID), where("star_id", "==", pontoTuristicoId))

            getDocs(q)
                .then(
                    (snapshot) => {

                        if (snapshot.size === 0) {
                            return ("Nenhum documento encontrado para exclusão.")
                        }

                        const doc = snapshot.docs[0]
                        deleteDoc(doc.ref)
                            .then(() => {
                                callback(`Local visitado com id ${doc.id} deletado com sucesso pelo usuário com id ${userUID}`)
                            })
                            .catch((error) => console.log("Erro ao deletar local visitado: ", error))

                    }
                )
                .catch(error => console.log("Erro ao tentar pegar os dados do Firestore: ", error))
        }

        console.log("Não existe usuário logado")
    }
}



export default VisitedService
