
export class AuthService {
    loggedIn = false;

    isAuthenticated() {

        const promise = new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 700);
        })

        return promise;
        // resolve basarili sonuc
        // reject hata sonucu doner
       //return this.loggedIn;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}