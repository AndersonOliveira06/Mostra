import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, deleteUser, updateEmail, updatePassword } from "firebase/auth"
import { storage, auth } from "../firebase/firebase_config"
//import { ref, getDownloadURL, uploadBytes } from "firebase/storage"

class UsuarioService {

    static signUp = async (email, password, firstName, lastName, callback) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            const listaDeImagens = [
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil01.png?alt=media&token=5ad7c3fa-b07d-4933-b5c1-0ca7bda00b6c',
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil02.png?alt=media&token=e0618417-df64-47ff-a88c-ea361c3d1c6b',
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil03.png?alt=media&token=5ced0b66-cd41-4022-82ed-33beec8667c8',
                'https://firebasestorage.googleapis.com/v0/b/mostra-back.appspot.com/o/FotosPerfis%2FPerfil04.png?alt=media&token=6983857d-7838-467d-8f6a-0e50332b8dcd'
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

    static signOut = async (callback) => {
        try {
            await signOut(auth)
            callback("Deslogado com sucesso!")
        } catch (error) {
            console.log("Erro ao fazer logout: ", error)
        }
    }

    static updateAccountData = async (firstName, lastName, newEmail, newPassword, callback) => {
        try {
            const user = auth.currentUser

            const informacoesAtualizadas = {
                displayName: `${firstName} ${lastName}`,
            }

            if (user !== null) {
                await updateProfile(user, informacoesAtualizadas)

                if (newEmail && newEmail !== user.email) {
                    await updateEmail(user, newEmail)
                }

                if (newPassword) {
                    await updatePassword(user, newPassword)
                }

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
