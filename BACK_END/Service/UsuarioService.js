import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfile, deleteUser } from "firebase/auth";

class UsuarioService {

    static signUp = (auth, email, password, firstName, lastName, photo, callback) => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then((userCredential) => {
                const user = userCredential.user;
                const informacoesAtualizadas = {
                    displayName: `${firstName} ${lastName}`,
                    photoURL: photo
                };
                updateProfile(user, informacoesAtualizadas)
                    .then(() => {
                        callback(userCredential)
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }

    static signIn = (auth, email, password, callback) => {
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
        const informacoesAtualizadas = {
            displayName: `${firstName} ${lastName}`,
            photoURL: photo
        };

        const auth = getAuth()
        const user = auth.currentUser

        if (user !== null){
            updateProfile(user, informacoesAtualizadas)
                .then(() => {
                    callback("Conta Atualizada com Sucesso!")
                })
                .catch((error) => console.log(error))
        }

    }

    static deleteAccount = (callback) => {

        const auth = getAuth()
        const user = auth.currentUser

        if (user !== null){
            deleteUser(user)
                .then(() => {
                    callback("Conta Deletada com Sucesso!")
                })
                .catch((error) => console.log(error))
        }

    }

    static getAccountInfo = () => {

        const auth = getAuth()
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
