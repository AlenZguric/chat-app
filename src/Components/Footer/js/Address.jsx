import { MdEmail, MdLocationOn } from 'react-icons/md';

export default function Address() {
    return (
        <div className='address'>
            <div className='email'>
            <a href="mailto:zguric.alen@hotmail.com">
            <span style={{ display: 'flex', alignItems: 'center' }}>
          <MdEmail style={{ size: 20, marginRight: '30px', marginTop: '30px' }} />
      <span style={{ paddingRight: '30px',  marginTop: '30px' }}>Pošalji e-mail</span>
    </span>
          </a>
            </div>
            <div className='addressMap'>
                 <a href="https://www.google.com/maps/place/Kotar+-+Stari+Gaj/@45.4021262,16.2037609,11z/data=!4m6!3m5!1s0x4766e94f6382de69:0x1ec2491a9b59f0af!8m2!3d45.4021173!4d16.348477!16s%2Fg%2F11b8tgf06h" target="_blank" rel="noopener noreferrer">
                    
                    <MdLocationOn style={{ size: 20}} />
                    
                    <address>
                        <p>Mjesto Pored Siska 1</p>
                        <p>Sisak</p>
                        <p>Hrvatska</p>
                    </address>
                    
                </a>
            </div>          
        </div>
      );
    }