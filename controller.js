let people = [
    {
        name: 'Sally Jane',
        age: 12,
        id: 1
    },
    {
        name: 'Jonny Peterson',
        age: 7,
        id: 2
    },
    {
        name: 'Tommy Harris',
        age: 5,
        id: 3
    },
    {
        name: 'Georgy Porgy',
        age: 4,
        id: 4
    },
    {
        name: 'Harry Potter',
        age: 15,
        id: 5
    }
];

module.exports = {
    getPeople: (req, res) => {
        res.status(200).send(people);
    },
    getPeopleById: (req, res) => {
        let person = people.filter(e => +req.params.id === e.id);
        res.status(200).send(person);
    },
    addPerson: (req, res) => {
        people.push(req.body);
        // object or array use .send
        // strings or numbers use .json
        res.status(200).json('It worked!');
    }
};