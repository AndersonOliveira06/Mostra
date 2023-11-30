import { collection, addDoc, query, where, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore"
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
    
            if (user && user.uid) {
                const userUID = user.uid.toString()
    
                // Consulta para obter todos os documentos da coleção 'Visitados' para o usuário logado
                const VisitadosQuery = query(lugaresVisitadosCollection, where("user_id", "==", userUID))
                const VisitadosSnapshot = await getDocs(VisitadosQuery)
    
                let lugaresIdVisitados = []
    
                // Itera sobre os documentos da coleção 'Visitados'
                for (const visitadoDoc of VisitadosSnapshot.docs) {
                    const { star_id } = visitadoDoc.data()
                    lugaresIdVisitados.push(star_id)
                }
    
                callback(lugaresIdVisitados)
            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao tentar pegar os dados do Firestore: ", error)
        }
    }

    static getLugaresVisitadosById = async (list, callback) => {
        try {
            const user = auth.currentUser
    
            if (user && user.uid) {
                let lugaresVisitados = []

                list.forEach(async (id) => {
                    const docRef = doc(firestore, "star", id)
                    const favoritoDoc = await getDoc(docRef)
                    lugaresVisitados.push({id: favoritoDoc.id ,...favoritoDoc.data()})

                    if (lugaresVisitados.length === list.length) {
                        callback(lugaresVisitados)
                    }
                })
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
