import { collection, addDoc, query, where, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore"
import { firestore, auth } from "../firebase/firebase_config"
import { FieldPath } from "firebase/firestore"


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
            const lugaresTuristicosCollection = collection(firestore, "star")
    
            const user = auth.currentUser
    
            if (user && user.uid) {
                const userUID = user.uid.toString()
    
                // Consulta para obter todos os documentos da coleção 'favoritos' para o usuário logado
                const favoritosQuery = query(lugaresFavoritosCollection, where("user_id", "==", userUID))
                const favoritosSnapshot = await getDocs(favoritosQuery)
    
                let lugaresIdFavoritos = []
    
                // Itera sobre os documentos da coleção 'favoritos'
                for (const favoritoDoc of favoritosSnapshot.docs) {
                    const { star_id } = favoritoDoc.data()
                    lugaresIdFavoritos.push(star_id)
                }
    
                callback(lugaresIdFavoritos)
            } else {
                console.log("Não existe usuário logado")
            }
        } catch (error) {
            console.log("Erro ao tentar pegar os dados do Firestore: ", error)
        }
    }

    static getLugaresFavoritosById = async (list, callback) => {
        try {
    
            const user = auth.currentUser
    
            if (user && user.uid) {
                let lugaresFavoritos = []
    
                await Promise.all(list.map(async (id) => {
                    const docRef = doc(firestore, "star", id)
                    const favoritoDoc = await getDoc(docRef)
                    lugaresFavoritos.push({ id: favoritoDoc.id, ...favoritoDoc.data() })
                }))
                
                if(lugaresFavoritos.length === list.length) {
                    callback(lugaresFavoritos)
                }

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
