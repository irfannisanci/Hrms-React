import axios from "axios";

export default class EducationService{
    getEducation(){
        return axios.get("http://localhost:8080/api/educations/getall")
    }
}