import axios from "axios"

export default class JobAdvertService {

    getJobAdvert(){
        return axios.get("http://localhost:8080/api/jobadverts/getall")
    }

    getByIdAndIsActive(id){
        return axios.get(`http://localhost:8080/api/jobadverts/getById?id=${id}`)
    }

    getByIsActive(){
        return axios.get("http://localhost:8080/api/jobadverts/findByIsActive")
    }
    
    getByIsActiveAndEmployerCompanyName(companyName){
        return axios.get(`http://localhost:8080/api/jobadverts/findByIsActiveAndEmployer_CompanyName?companyName=${companyName}`)
    }
}

