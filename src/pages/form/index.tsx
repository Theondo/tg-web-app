import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';

import './Form.css'

const From = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    }
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data'
    });
  }, []);

  useEffect(() => {
    !street || !country ? tg.MainButton.hide() : tg.MainButton.show();
  }, [country, street])

  const onChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  }
  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  }
  const onChangeSubject = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  }

  return (
    <div className={'form'}>
      <h3>Please, enter your data</h3>
      <input
        className={'input'}
        type='text'
        placeholder={'Страна'}
        onChange={onChangeCountry}
        value={country}
      />
      <input
        className={'input'}
        type='text'
        placeholder={'Улица'}
        onChange={onChangeStreet}
        value={street}
      />
      <select
        className={'select'}
        onChange={onChangeSubject}
        value={subject}
      >
        <option value={'physical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default From;