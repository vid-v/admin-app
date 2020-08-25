import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import Container from '../components/UiElements/Container/Container';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import {H1, H2, H3, H4, H5, H6} from 'baseui/typography';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Select } from 'baseui/select';
import { Textarea } from 'baseui/textarea';
import { Checkbox } from 'baseui/checkbox';
import { RadioGroup, Radio } from 'baseui/radio';
import { Datepicker } from 'baseui/datepicker';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import Auth from '../utils/auth0';
import { Row, Col } from 'react-flexbox-grid';
type FormData = {
  newPassword: string;
};
const Login: NextPage<{}> = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, errors } = useForm();
  const [select, setSelect] = useState([]);
  const [datepicker, setDatepicker] = useState([]);
  const [aboutYourself, setAboutYourself] = useState('');
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('1');
  const [state, setState] = useState<FormData>({
    newPassword: ''
  });

  useEffect(() => {
    register({ name: 'dateOfBirth' });
    register({ name: 'favoriteColor' });
    register({ name: 'aboutYourself' });
    register({ name: 'gender' });
  }, [register]);

  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data, null, 4));
  };

  const handleSelect = ({ value }) => {
    setValue('favoriteColor', value);
    setSelect(value);
  };

  const handleDatepicker = ({ date }) => {
    setValue('dateOfBirth', date);
    setDatepicker(date);
  };

  const handleTextarea = event => {
    const value = event.target.value;
    setAboutYourself(value);
    setValue('aboutYourself', value);
  };

  const handleRadioGroup = event => {
    setValue('gender', event.currentTarget.value);
    setRadio(event.currentTarget.value);
  };
 
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <>
      <Head>
        <title>Login | KwikPay</title>
        <meta name="Description" content="KwikPay login page" />
      </Head>

      <Container>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Block paddingTop={['0', '0', '0', '50px']}>
      <Row>
            <Col lg={3}>
              
            </Col>
            <Col lg={9}>
            <Card  style={{ width: '60%', height: '400px' }}>
            <Row>
              <H5>Log In</H5>
            </Row>
            <Row>

                  <Block>
                   <FormControl
                      label=""
                      caption=""
                      error={errors.email && 'Please enter a valid email address'}
                    >
                      <Input
                        name="email"
                        placeholder="Email"
                        inputRef={register({
                          required: true,
                          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                        overrides={{
                          InputContainer: {
                            style: () => {
                              return { backgroundColor: 'transparent' };
                            },
                          },
                        }}
                      />
                    </FormControl>
              </Block>
            </Row>
            <Row>
                  <Block>
                   <FormControl
                      label=""
                      caption="Please use 20 characters at maximum"
                      overrides={{
                        Label: {
                          style: ({ $theme }) => {
                            return { ...$theme.typography.font350 };
                          },
                        },
                      }}
                    >
                      <Input
                        type="password"
                        name="newPassword"
                        placeholder="Password"
                        value={state.newPassword}
                        onChange={handleOnChange}
                        inputRef={register({ required: true, maxLength: 20 })}
                        overrides={{
                          InputContainer: {
                            style: () => {
                              return { backgroundColor: 'transparent' };
                            },
                          },
                        }}
                      />
                    </FormControl>
              </Block>

            </Row>
              <Button type="submit">Login In</Button>
              </Card>
            </Col>
          </Row>
       
      </Block>

      
    </form>
        <Block
          overrides={{
            Block: {
              style: {
                minHeight: 'calc(100vh - 213px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}
        >
         

          <Button
            onClick={() => router.push('/api/login')}
            startEnhancer={() => <IoLogoFacebook size="1.25rem" />}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font250,
                    width: '100%',
                    maxWidth: '260px',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    marginTop: '10px',
                    justifyContent: 'flex-start',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    backgroundColor: '#4267B2',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#4267B2',
                      opacity: 0.95,
                    },
                  };
                },
              },
            }}
          >
            Continue with Auth0
          </Button>

          <Button
            onClick={() => router.push('/')}
            startEnhancer={() => <IoLogoFacebook size="1.25rem" />}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font250,
                    width: '100%',
                    maxWidth: '260px',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    marginTop: '10px',
                    justifyContent: 'flex-start',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    backgroundColor: '#4267B2',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#4267B2',
                      opacity: 0.95,
                    },
                  };
                },
              },
            }}
          >
            Continue with Facebook
          </Button>

          <Button
            onClick={() => router.push('/')}
            startEnhancer={() => <IoLogoTwitter size="1.25rem" />}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font250,
                    backgroundColor: '#1DA1F2',
                    width: '100%',
                    maxWidth: '260px',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    marginTop: '10px',
                    justifyContent: 'flex-start',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    ':hover': {
                      backgroundColor: '#1DA1F2',
                      opacity: 0.95,
                    },
                  };
                },
              },
            }}
          >
            Continue with Twitter
          </Button>
        </Block>
      </Container>
    </>
  );
};

export default Login;
