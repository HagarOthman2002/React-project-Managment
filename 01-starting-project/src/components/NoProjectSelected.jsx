import noProjectImg from "../assets/no-projects.png"
import Button from "./Button"
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="w-2/3 mt-24 text-center" >
            {/* className="w-[5rem] h-[5rem]"  */}
            <img src={noProjectImg} alt="An empty task list" className="w-16 h-16 obeject-contain mx-auto" />  
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create new Project</Button>
            </p>
        </div>
    )
}