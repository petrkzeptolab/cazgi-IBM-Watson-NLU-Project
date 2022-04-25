import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (   
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                this.state.emotions.map((emotionscore)=>{
                    return <tr><td>emotionscore[0]</td><td>emotionscore[1]</td></tr>
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;