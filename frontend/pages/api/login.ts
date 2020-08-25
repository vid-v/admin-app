import auth0 from '../../utils/auth0';
import {NextApiHandler} from 'next';


const login : NextApiHandler = async (req, res) => {
	console.log('testestssw');
	try {
    await auth0.handleLogin(req, res, { redirectTo: '/' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}

export default login;


