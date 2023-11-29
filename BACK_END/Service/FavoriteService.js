import { collection, addDoc, query, where, getDocs, deleteDoc } from "firebase/firestore"
import { firestore, auth } from "../firebase/firebase_config"

class FavoriteService {

    static addFavoritePlace = async (pontoTuristicoId, callback) => {
        try {
            const lugaresFavoritosCollection = collection(firestore, "favoritos");

            const user = auth.currentUser;
            const userUID = user.uid.toString();

            if (user !== null) {
                const novoLocalFavorito = {
                    star_id: pontoTuristicoId,
                    user_id: userUID,
                };

                const document = await addDoc(lugaresFavoritosCollection, novoLocalFavorito);
                callback(`Local favorito com id ${document.id} adicionado com sucesso pelo usuário com id ${userUID}`);
            } else {
                console.log("Não existe usuário logado");
            }
        } catch (error) {
            console.log("Erro ao adicionar local favorito: ", error);
        }
    }

    static getLugaresFavoritosByUser = async (callback) => {
        try {
            const lugaresFavoritosCollection = collection(firestore, "favoritos")

            const user = auth.currentUser
            const userUID = user.uid.toString()

            if (user !== null) {
                const q = query(lugaresFavoritosCollection, where("user_id", "==", userUID))

                const snapshot = await getDocs(q)
                const lugaresFavoritos = []
                const lugaresTuristicosCollection = collection(firestore, "star")

                for (const document of snapshot.docs) {
                    const { star_id, user_id } = document.data()

                    const c = query(lugaresTuristicosCollection, where("id", "==", star_id))

                    const querySnapshot = await getDocs(c)
                    const doc = querySnapshot.docs[0]

                    if (doc) {
                        const { descricao, fotos, localizacao, nome } = doc.data()
                        lugaresFavoritos.push({ star_id, user_id, nome, descricao, fotos, localizacao })
                    }
                }

                callback(lugaresFavoritos)

            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao tentar pegar os dados do Firestore: ", error)
        }
    }

    static deleteLugaresFavoritosByUser = async (pontoTuristicoId, callback) => {
        try {
            const lugaresFavoritosCollection = collection(firestore, "favoritos")

            const user = auth.currentUser
            const userUID = user.uid.toString()

            if (user !== null) {
                const q = query(lugaresFavoritosCollection, where("user_id", "==", userUID), where("star_id", "==", pontoTuristicoId))

                const snapshot = await getDocs(q)

                if (snapshot.size === 0) {
                    return callback("Nenhum documento encontrado para exclusão.")
                }

                const doc = snapshot.docs[0]
                await deleteDoc(doc.ref)
                callback(`Local favorito com id ${doc.id} deletado com sucesso pelo usuário com id ${userUID}`)

            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao tentar pegar os dados do Firestore: ", error)
        }
    }

}

export default FavoriteService
