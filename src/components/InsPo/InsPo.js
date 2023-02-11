import "./InsPo.css"
import Card from 'react-bootstrap/Card';
import {Link,Outlet} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function InsPo(){
    return(
      <div className="ins">

          <Card className="card">
            
            <Card.Body>
              <Card.Title>Term Life Insurance</Card.Title>
              <Card.Text>
              Term insurance is a type of life insurance that provides coverage for a specific period of time or years, i.e., a term. This type of life insurance provides a financial benefit to the nominee in case of the unfortunate demise of the insured during the policy term. 
              </Card.Text>
              <Link style={{textDecoration:'none'}} to="/insurance/life" className='life' ><Button variant="primary">Register</Button></Link>

            </Card.Body>
          </Card>
          <Card className="card">
            
            <Card.Body>
              <Card.Title>Car Insurance</Card.Title>
              <Card.Text>
              Car insurance or four wheeler insurance is an agreement between a car owner and the car insurance provider that offers protection for four-wheelers in the case of financial losses due to unforeseen events like accidents and natural calamities. This contract more often than not, is perceived as a piece of paper to be kept in the dashboard of the car and to be taken out only in case the traffic cops ever asks you for papers.              </Card.Text>
              <Link style={{textDecoration:'none'}} to="/insurance/car" className='car'><Button variant="primary">Register</Button></Link>

            </Card.Body>
          </Card>
          <Card className="card">
            
            <Card.Body>
              <Card.Title>Health Insurance</Card.Title>
              <Card.Text>
              Health insurance is a form of insurance coverage that pays for medical and surgical expenses incurred by the insured. It is designed to provide financial protection against high medical costs. Health insurance policies are designed to provide financial assistance to the insured person during unexpected medical emergency situations. The coverage can be provided by a government-funded program, such as Medicare or Medicaid, or by a private company.
              </Card.Text>
              <Link style={{textDecoration:'none'}} to="/insurance/health" className='health'><Button variant="primary">Register</Button></Link>

            </Card.Body>
          </Card>
          <Card className="card">
            
            <Card.Body>
              <Card.Title>Investment Plans</Card.Title>
              <Card.Text>
              Money is an essential aspect of life that we can’t take for granted in the society we live in today. Money can enrich our lives and put us into a position to enrich others.You’ve probably heard that wise investing is the key to building wealth. After all, stashing your hard-earned money in a normal bank account only yields a tiny amount of interest.
              </Card.Text>
              <Link style={{textDecoration:'none'}} to="/insurance/invest" className='invest'><Button variant="primary">Register</Button></Link>

            </Card.Body>
          </Card>

          <Outlet/>
      </div>

    );
}

export default InsPo;