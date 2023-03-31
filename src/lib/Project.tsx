interface IProject {
    
    projectName: string;
    projectDescription: string;
    projectRepo: string;
    projectLivePage: string;
    projectScreenshots: string[];

    getProjectName: () => string;
    setProjectName: (projectName: string) => void;

    getProjectDescription: () => string;
    setProjectDescription: (projectDescription: string) => void;

    getProjectRepo: () => string;
    setProjectRepo: (projectRepo: string) => void;

    getProjectLivePage: () => string;
    setProjectLivePage: (projectLivePage: string) => void;

    getProjectScreenshot: () => string;
    setProjectScreenshot: (projectScreenshot: string) => void;
}

class Project implements IProject {
    projectName: string;
    projectDescription: string;
    projectRepo: string;
    projectLivePage: string;
    projectScreenshots: string[];
    constructor(projectName: string,
        projectDescription: string,
        projectRepo: string,
        projectLivePage: string,
        projectScreenshots: string[]) {
            this.projectName = projectName;
            this.projectDescription = projectDescription;
            this.projectRepo = projectRepo;
            this.projectLivePage = projectLivePage;
            this.projectScreenshots = projectScreenshots;
        }
        getProjectName() {
            return this.projectName;
        }
        setProjectName(projectName: string) {
            this.projectName = this.projectName;
        }
        getProjectDescription() {
            return this.projectDescription;
        }
        setProjectDescription() {
            this.projectDescription = this.projectDescription;
        }
        getProjectRepo() {
            return this.projectRepo;
        }
        setProjectRepo() {
            this.projectRepo = this.projectRepo;
        }
        getProjectLivePage() {
            return this.projectLivePage;
        }
        setProjectLivePage() {
            this.projectLivePage = this.projectLivePage;
        }
        getProjectScreenshot() {
            return this.projectLivePage;
        }
        setProjectScreenshot() {
            this.projectScreenshots = this.projectScreenshots;
        }

}
export default Project;