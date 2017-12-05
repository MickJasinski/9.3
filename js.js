var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maast chtian stage of the late Cretaceous period.';
var dinosaur ='Triceratops';

var dinoUprCase = dinosaur.toUpperCase();

var textFix = text.replace('Velociraptor', dinosaur);

var textClip = textFix.slice(0, textFix.length/2);
console.log(textClip);