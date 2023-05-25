import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["01/05/2023", "08/05/2023", "15/05/2023", "22/05/2023", "29/05/2023", "05/06/2023", "12/06/2023"],
        datasets: [{
          data: [0, 1000, 1500, 2500, 2500, 2500, 2500],
          label: "Arrecadado",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: true,
        }
        ]
      },
      options: {
        elements: {
          line: {
              tension: 0
          }
        },
        scales: {
          xAxes: [{
            display: true,
        }],
        yAxes: [{
          display: true,
          ticks: {
              beginAtZero: true,
              max: 3000
          }
      }]
        }
      },
    });
  }, [])


  return (
    <>
      {/* line chart */}
      <h1 className="w-[1100px] mx-auto mt-4 text-xl font-semibold ">Total para finalizar FASE 1: R$ 10.000,00</h1>
      <h1 className="w-[1100px] mx-auto mt-1 text-xl font-semibold ">Total arrecadado: R$ 5.000,00</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;