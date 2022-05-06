import {createServer} from 'miragejs';

function mockServer(){
    let server = createServer(
        {
            routes(){
                this.urlPrefix = "http://www.testdomain.com";
                this.namespace = "/v1/api";
                this.timing = 5000;

                this.get("/books", ()=>{
                    return[
                        {
                            title : "Harry Potter and the philosopher's stone",
                            author: "J. K. Rowling",
                            year: 1998
                        },
                        {
                            title : "Das doppelte Lottchen",
                            author: "Emil Erich Kästner",
                            year: 1949
                        },{
                            title : "Goddess in Everywoman",
                            author: "Jean Sinoda Bolen",
                            year: 1989
                        }
                    ]
                });
            }
        }
    );

    return server;

}

export default mockServer;