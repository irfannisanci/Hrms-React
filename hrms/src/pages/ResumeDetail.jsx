import {useState,useEffect} from 'react'
import ResumeService from '../services/ResumeService'
import { useParams } from 'react-router'
export default function ResumeDetail() {

    const [resume, setResume] = useState([])
    let {candidateId}=useParams()
            useEffect(() => {
                let resumeService=new ResumeService()
                resumeService.getResumeByCandidateId(candidateId).then(result=>setResume(result.data.data))
            }, [candidateId])
    return (
        <div>
            {resume.id}
        </div>
    )
}
