import { collection, addDoc, query, where, getDocs, deleteDoc } from "firebase/firestore"
import { firestore, auth } from "../firebase/firebase_config"

class FavoriteService {

    static addFavoritePlace = (pontoTuristicoId, callback) => {
        const lugaresFavoritosCollection = collection(firestore, "favoritos")

        const user = auth.currentUser
        const userUID = user.uid.toString()

        if (user !== null){
            const novoLocalFavorito = {
                star_id: pontoTuristicoId,
                user_id: userUID,
            };
    
            addDoc(lugaresFavoritosCollection, novoLocalFavorito)
                .then(
                    (document) => {
                        callback(`Local favorito com id ${document.id} adicionado com sucesso pelo usuário com id ${userUID}`)
                    }
                )
                .catch((error) => console.log("Erro ao adicionar local favorito: ", error))
        }

        console.log("Não existe usuário logado")
    }

    static getLugaresFavoritosByUser = (callback) => {
        const lugaresFavoritosCollection = collection(firestore, "favoritos")

        const user = auth.currentUser
        const userUID = user.uid.toString()

        if (user !== null){
            const q = query(lugaresFavoritosCollection, where("user_id", "==", userUID))
    
            getDocs(q)
                .then(
                    (snapshot) => {
                        const lugaresFavoritos = []
                        const lugaresTuristicosCollection = collection(firestore, "star")
    
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
                                            lugaresFavoritos.push({ star_id, user_id, nome, descricao, fotos, localizacao })
                                        }
                                    )
                                    .catch((error) => console.log("Erro ao comparar os IDs: ", error))
                            }
                        )

                        callback(lugaresFavoritos)
                    }
                )
                .catch(error => console.log("Erro ao tentar pegar os dados do Firestore: ", error))
        }

        console.log("Não existe usuário logado")
    }

    static deleteLugaresFavoritosByUser = (pontoTuristicoId, callback) => {
        const lugaresFavoritosCollection = collection(firestore, "favoritos")

        const user = auth.currentUser
        const userUID = user.uid.toString()

        if (user !== null) {
            const q = query(lugaresFavoritosCollection, where("user_id", "===", userUID), where("star_id", "==", pontoTuristicoId))
            
            getDocs(q)
                .then(
                    (snapshot) => {
    
                        if (snapshot.size === 0) {
                            return ("Nenhum documento encontrado para exclusão.")
                        }
    
                        const doc = snapshot.docs[0]
                        deleteDoc(doc.ref)
                            .then(() => {
                                callback(`Local favorito com id ${doc.id} deletado com sucesso pelo usuário com id ${userUID}`)
                            })
                            .catch((error) => console.log("Erro ao deletar local favorito: ", error))
    
                    }
                )
                .catch(error => console.log("Erro ao tentar pegar os dados do Firestore: ", error))
        }

        console.log("Não existe usuário logado")
    }

}

export default FavoriteService
