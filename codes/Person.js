function Person(name, age) {
    this.name = name;
    this.age = age;
}

//adding behaviour
Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getAge = function() {
    return this.age;
}

Person.prototype.setAge = function(age) {
    this.age = age;
}
// static function
Person.equals = function(p1, p2) {
    return (p1.name === p2.name) && (p1.age === p2.age);
}