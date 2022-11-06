import { useState } from "react";
import InputFieldComponent from "./InputFieldComponent";
import lessonRepo from "../../repositories/lessonRepo"

const CreateLessonForm = ({business}) => {

    const [lessonName, setLessonName] = useState("")
    const [date, setDate] = useState("2022-08-20'T'13:20:10*633+0000")
    const [capacity, setCapacity] = useState("69")
    const [description, setDescription] = useState("a very impressive description")
    const [price, setPrice] = useState("420")


    const handleCreateLesson = (e) => {
        e.preventDefault()
        const lessonObject = {
            name: lessonName,
            date: date,
            capacity: capacity,
            description: description,
            price: price,
        }
        lessonRepo.addNewLessonToBusiness(lessonObject, business.id)
    };

    return (
        <form >
            <InputFieldComponent placeholder="Lesson name" state={lessonName} setState={setLessonName}/>
            <InputFieldComponent placeholder="Date" state={date} setState={setDate}/>
            <InputFieldComponent placeholder="Capacity" state={capacity} setState={setCapacity}/>
            <InputFieldComponent placeholder="Description" state={description} setState={setDescription}/>
            <InputFieldComponent placeholder="Price" state={price} setState={setPrice}/>
            <button onClick={handleCreateLesson} >Create lesson</button>
        </form>

    )
};

export default CreateLessonForm;