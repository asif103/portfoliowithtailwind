import React, { useState, useEffect} from 'react';
import sanityClient from '../client.js';

const Project = () => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            live,
            github,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setProjects(data))
        .catch(console.error)
    },[])
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12 mt-6 headline">Welcome to my projects</h2>
                <div className="grid md:grid-cols-2 ld:grid-cols-3 gap-8">
                    {projects && projects.map((project, index) => (
                        <article key={ index} className="border-l-8 border-b-8 border-green-400 rounded h-100 bg-white shadow">
                                <span className="block rounded  leading-snug " key={ index}>
                                    <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="w-full h-full rounded object-cover" />
                                    <span className="block h-full pr-4 pb-4">
                                    <h3 className="text-gray-800 text-lg font-bold px-3 py-4 m-4 bg-red-700 text-red-100 bg-opacity-75 rounded">{project.title}</h3>
                                    <p className="text-gray-800 text-lg font-bold px-3 py-4 bg-white bg-opacity-75 rounded">{project.description}</p>
                                    {project.live && <a href={project.live} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 ml-4 p-4 bg-green-400 rounded">Live</a>}
                                    {project.github && <a href={project.github} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 ml-4 p-4 bg-green-400 rounded">Github</a>}
                                    </span>
                                </span>
                        </article>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default Project;