import { useNavigate } from 'react-router-dom';
import ProjectForm from '../Project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    const navigate = useNavigate();

    function createPost(projects) {
        // Initialize cost and services
        projects.cost = 0;
        projects.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projects),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            // Redirect
            navigate('/project', { state: { message: 'Campanha criada com sucesso!' } });
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.NewProject_container}>
            <h1>NewProject</h1>
            <p>Crie sua campanha para depois gerenciar as doações</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Campanha" />
        </div>
    );
}

export default NewProject;
