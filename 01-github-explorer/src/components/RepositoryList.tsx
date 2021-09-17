import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repo {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/fvedoin/repos')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Repos list</h1>
            <ul>
                {repos.map(repo => (
                    <RepositoryItem key={repo.name} repository={repo} />
                ))}
            </ul>
        </section>
    )
}