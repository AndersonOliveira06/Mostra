import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, deleteUser } from "firebase/auth"
import { storage, auth } from "../firebase/firebase_config"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"

class UsuarioService {

    static signUp = (email, password, firstName, lastName, photo, callback) => {

        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then((userCredential) => {
                const user = userCredential.user

                // Upload da imagem para o Storage
                const storageRef = ref(storage, `FotosPerfis/${user.uid}/${photo.name}`)
                uploadBytes(storageRef, photo)
                    .then(() => {

                        // Obter a URL do download da imagem
                        getDownloadURL(storageRef)
                            .then((downloadURL) => {

                                const informacoesAtualizadas = {
                                    displayName: `${firstName} ${lastName}`,
                                    photoURL: downloadURL
                                }

                                // Atualizar o perfil do usuário com as informações e URL da imagem
                                updateProfile(user, informacoesAtualizadas)
                                    .then(() => {
                                        callback(userCredential)
                                    })
                                    .catch((error) => console.log("Não foi possível adicionar as infos no perfil do usuário: ", error))

                            })
                            .catch((error) => console.log("Não foi possível obter a URL da imagem: ", error))
                    })
                    .catch((error) => console.log("Não foi possível realizar o upload do arquivo: ", error))
            })
            .catch((error) => console.log("Não foi possível cadastrar usuário: ", error))
    }


    static signIn = (email, password, callback) => {

        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then((userCredential) => {
                callback(userCredential)
            })
            .catch((error) => console.log(error))
    }


    static updateAccountData = (firstName, lastName, photo, callback) => {

        const user = auth.currentUser

        // Upload da imagem para o Storage
        const storageRef = ref(storage, `FotosPerfis/${user.uid}/${photo.name}`)
        uploadBytes(storageRef, photo)
            .then(() => {

                // Obter a URL do download da imagem
                getDownloadURL(storageRef)
                    .then((downloadURL) => {

                        const informacoesAtualizadas = {
                            displayName: `${firstName} ${lastName}`,
                            photoURL: downloadURL
                        };

                        if (user !== null) {
                            // Atualizar o perfil do usuário com as informações e URL da imagem
                            updateProfile(user, informacoesAtualizadas)
                                .then(() => {
                                    callback("Conta Atualizada com Sucesso!")
                                })
                                .catch((error) => console.log("Não foi possível adicionar as infos no perfil do usuário: ", error))
                        }
                    })
                    .catch((error) => console.log("Não foi possível obter a URL da imagem: ", error))
            })
            .catch((error) => console.log("Não foi possível realizar o upload do arquivo: ", error))
    }


    static deleteAccount = (callback) => {

        const user = auth.currentUser

        if (user !== null) {
            deleteUser(user)
                .then(() => {
                    callback("Conta Deletada com Sucesso!")
                })
                .catch((error) => console.log(error))
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
