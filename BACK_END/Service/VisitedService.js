import { collection, addDoc, query, where, getDocs, deleteDoc } from "firebase/firestore"
import { firestore, auth } from "../firebase/firebase_config"

class VisitedService {

    static addVisitedPlace = async (pontoTuristicoId, callback) => {
        try {
            const lugaresVisitadosCollection = collection(firestore, "visitados")

            const user = auth.currentUser
            const userUID = user.uid.toString()

            if (user !== null) {
                const novoLocalVisitado = {
                    star_id: pontoTuristicoId,
                    user_id: userUID,
                }

                const document = await addDoc(lugaresVisitadosCollection, novoLocalVisitado)
                callback(`Local visitado com id ${document.id} adicionado com sucesso pelo usuário com id ${userUID}`)
            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao adicionar local visitado: ", error)
        }
    }

    static getLugaresVisitadosByUser = async (callback) => {
        try {
            const lugaresVisitadosCollection = collection(firestore, "visitados")

            const user = auth.currentUser
            const userUID = user.uid.toString()

            if (user !== null) {
                const q = query(lugaresVisitadosCollection, where("user_id", "==", userUID))

                const snapshot = await getDocs(q)
                const lugaresVisitados = []
                const lugaresTuristicosCollection = collection(firestore, "star")

                for (const document of snapshot.docs) {
                    const { star_id, user_id } = document.data()

                    const c = query(lugaresTuristicosCollection, where("id", "==", star_id))

                    const querySnapshot = await getDocs(c)
                    const doc = querySnapshot.docs[0]

                    if (doc) {
                        const { descricao, fotos, localizacao, nome } = doc.data()
                        lugaresVisitados.push({ star_id, user_id, nome, descricao, fotos, localizacao })
                    }
                }

                callback(lugaresVisitados)

            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao tentar pegar os dados do Firestore: ", error)
        }
    }

    static deleteLugaresVisitadosByUser = (pontoTuristicoId, callback) => {
        const lugaresVisitadosCollection = collection(firestore, "visitados")

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

    static deleteLugaresVisitadosByUser = async (pontoTuristicoId, callback) => {
        try {
            const lugaresVisitadosCollection = collection(firestore, "visitados")

            const user = auth.currentUser
            const userUID = user.uid.toString()

            if (user !== null) {
                const q = query(lugaresVisitadosCollection, where("user_id", "==", userUID), where("star_id", "==", pontoTuristicoId))

                const snapshot = await getDocs(q)

                if (snapshot.size === 0) {
                    return callback("Nenhum documento encontrado para exclusão.")
                }

                const doc = snapshot.docs[0]
                await deleteDoc(doc.ref)
                callback(`Local visitado com id ${doc.id} deletado com sucesso pelo usuário com id ${userUID}`)

            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao tentar pegar os dados do Firestore: ", error)
        }
    }
}



export default VisitedService
