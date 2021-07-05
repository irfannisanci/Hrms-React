import axios from "axios";

export default class ResumeService{
    getResumeByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/resums/getByCandidateId/${candidateId}`)
    }

    getAllResume(){
        return axios.get("http://localhost:8080/api/resums/getall")
    }
}