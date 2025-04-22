import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject..jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [isProjectBeingAdded, setAddProject] = useState({
    selectedProjectId: undefined, //undefined not choosing anything
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setAddProject((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text.trim(), // Trim whitespace
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setAddProject((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id != id),
      };
    });
  }

  function handleStartAddProject() {
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, //null means adding new project
      };
    });
  }
  function handleAddProject(projectData) {
    setAddProject((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancel() {
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects],
      };
    });
  }

  function handleSelectProject(id) {
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDelete(id) {
    setAddProject((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id != id
      );
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }
  console.log(isProjectBeingAdded);
  //finding an elemnt in array by Id
  const selectedProject = isProjectBeingAdded.projects.find(
    (project) => project.id === isProjectBeingAdded.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={isProjectBeingAdded.tasks}
    />
  );
  if (isProjectBeingAdded.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (isProjectBeingAdded.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={isProjectBeingAdded.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={isProjectBeingAdded.selectedProjectId}
      />
      {/* <NoProjectSelected onStartAddProject = {handleStartAddProject}/>  */}
      {/* {isProjectBeingAdded.selectedProjectId === null ? <NewProject/> : <NoProjectSelected onStartAddProject = {handleStartAddProject}/> } */}

      {content}
    </main>
  );
}

export default App;
