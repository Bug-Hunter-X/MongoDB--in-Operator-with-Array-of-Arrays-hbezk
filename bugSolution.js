```javascript
// Correct use of $in operator with a flat array
db.collection.find({ field: { $in: [1, 2, 3, 4] } });
```