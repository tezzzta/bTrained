import styles from "./Bottom.module.css";
import Nav from 'react-bootstrap/Nav';

// para las rutassss

import {Link } from "react-router-dom";

const BottomAnim = () => {

            return (
        <div className={styles.dropdown}> 
                <Nav className="nav-pills">
          <Nav.Item> 
            <Nav.Link  className="active bg-custom" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', backgroundColor: "#0003bf"  }}>
              Menú
            </Nav.Link>
          </Nav.Item>
          </Nav>
        {/* <button className={styles.dropbtn}>Menú</button> */}
        <div className={styles.dropdowncontent}>
        <div className={styles.input}>
          
        <button className={styles.value}>
        {/* <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><path fill="#7D8590" d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z"></path></svg> */}
        Gallery
        </button>
              <Link to="/create">
      <button className={styles.value}>
        Create
      </button>
      </Link>
  <button className={styles.value}>
    Profile
  </button>

</div>
        </div>
        </div>
        )};


export default BottomAnim;


