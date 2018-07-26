export const environment = {
    API_URL: 'https://api.github.com/repos/facebook/react/issues'
};
  

class IssueAPI { 

    static getStatus(): any {
        return fetch(environment.API_URL);
    }
}

export default IssueAPI;