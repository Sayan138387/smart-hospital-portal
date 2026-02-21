document.getElementById('updateMetrics').addEventListener('click', () => {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if(weight && height) {
    const bmi = (weight / ((height/100)**2)).toFixed(1);

    document.getElementById('bmi').innerText = bmi;
    alert('Metrics updated!');
  } else {
    alert('Please enter valid weight and height');
  }
});