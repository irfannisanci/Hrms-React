import axios from "axios";

export default class CandidateRegisterService{
    candidateRegister(input){
        return axios.post("http://localhost:8080/api/candidates/add",input)
    }
}