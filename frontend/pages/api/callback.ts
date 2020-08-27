import auth0 from '../../utils/auth0';
import {NextApiHandler} from 'next';


const callback : NextApiHandler = async (req, res) => {
	try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

export default callback;


