
//import * as tf from '@tensorflow/tfjs-node';



async function doit() {
    const model = await tf.loadLayersModel(' https://foo.bar/tfjs_artifacts/model.json');
///        /home/sofyan/Desktop/spyderCode/my_model.json
    // JavaScript
   
    const example = [608,41,2,150040,2,1,1,95000];  // for example
    const prediction = model.predict(example);
    return prediction;
}


$("#btn-getP").click(function(){
    document.getElementById('Pout').textContent=doit();
  });

  

