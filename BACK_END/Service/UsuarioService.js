import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, deleteUser } from "firebase/auth"
import { storage, auth } from "../firebase/firebase_config"
//import { ref, getDownloadURL, uploadBytes } from "firebase/storage"

class UsuarioService {

    static signUp = async (email, password, firstName, lastName, callback) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            const listaDeImagens = [
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil1.png?alt=media&token=5b27f90d-5857-48fe-82d2-2b54806852e8',
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil2.png?alt=media&token=88772bcc-f15b-403d-9a9f-7eda1411c8b6',
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil3.png?alt=media&token=394ab889-8f92-4d36-8f49-b2e8c864d23d',
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil4.png?alt=media&token=770219ee-9e0a-47ee-b92b-fb0481273ba2'
            ]

            const randomIndex = Math.floor(Math.random() * listaDeImagens.length)
            const imagemAleatoria = listaDeImagens[randomIndex]

            const informacoesAtualizadas = {
                displayName: `${firstName} ${lastName}`,
                photoURL: imagemAleatoria,
            };

            await updateProfile(user, informacoesAtualizadas)
            callback(userCredential);
        } catch (error) {
            console.log("Erro ao cadastrar usuário: ", error)
        }
    }


    static signIn = async (email, password, callback) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            callback(userCredential)
        } catch (error) {
            console.log("Erro ao fazer login: ", error)
        }
    }

    static updateAccountData = async (firstName, lastName, callback) => {
        try {
            const user = auth.currentUser

            const informacoesAtualizadas = {
                displayName: `${firstName} ${lastName}`,
            };

            if (user !== null) {
                await updateProfile(user, informacoesAtualizadas)
                callback("Conta Atualizada com Sucesso!")
            }
        } catch (error) {
            console.log("Erro ao atualizar informações do perfil: ", error)
        }
    }

    static deleteAccount = async (callback) => {
        try {
            const user = auth.currentUser

            if (user !== null) {
                await deleteUser(user)
                callback("Conta Deletada com Sucesso!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    static getAccountInfo = () => {

        const user = auth.currentUser

        if (user !== null) {
            return {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid
            }
        }
    }
}

export default UsuarioService
