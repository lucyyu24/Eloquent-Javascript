/* 

6.1 A vector type

Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
Give the Vector prototype two methods, plus and minus, that take an- other vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

*/ 

function Vector (x,y) {
  this.x = x,
  this.y = y
}

Vector.prototype.plus = function(v) {
    return new Vector (v.x + this.x, v.y + this.y); 
}

Vector.prototype.minus = function(v) {
  return new Vector (this.x - v.x, this.y - v.y);
}

Object.defineProperty(Vector.prototype, "length",
  { get: function() {return Math.sqrt(this.x *this.x + this.y*this.y);} } );