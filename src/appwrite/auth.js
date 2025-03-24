// Authentication Service
// We create services to avoid vender lock-in (to be heavily dependent on a provider)
// Tomorrow if we want to switch to a different service provider, we should be able to do that comfortably  

import conf from "../conf/conf.js"
import { Client, Account, ID} from 'appwrite';

// directly create and export a object of this class
// so instead of importing the class and creating a object and then using the methods
// we can directly import the object and directly access the methods

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){  // we can change the methods here if we want to use different provider like firebase. For the user the parameters and method name won't change.
        // eslint-disable-next-line no-useless-catch
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method to login the user as soon as the registration is successful
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error){
            throw error;
        }
    }
    
    async login({email, password}){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error){
            throw error;
        }
    }

    // if the user directly goes to a particular page, check if the user if logged in or not
    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch (error){
            console.log("Appwrite service :: getCurrentUser :: error ", error);
        }

        return null; // if there is a error in try catch, still the method will return null
    }

    async logout(){
        try{
            return await this.account.deleteSessions();  // logout from all the devices
        } catch (error){
            console.log("Appwrite service :: logout :: error ", error);
        }
    }
}

const authService = new AuthService();  // an object of the class AuthService

export default authService;