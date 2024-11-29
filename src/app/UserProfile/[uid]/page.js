'use client';

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import ProfileAssetCard from '../../../components/ProfileAssetCard';
import { getAssetsByID } from '../../../api/assetData';
import { getLocationsByID } from '../../../api/locationData';
import ProfileCard from '../../../components/ProfileCard';
import LocationCard from '../../../components/LocationCard';

export default function UserProfile() {
  const [userDevices, setUserDevices] = useState([]);
  const [userName, setUserName] = useState('');
  const [assetLocations, setAssetLocations] = useState([]);

  const getDevicesId = () => {
    getAssetsByID()
      .then((data) => {
        setUserDevices(data);
      })
      .catch((error) => {
        console.error('error fetching data', error);
      });
  };
  const showAllLocationsID = () => {
    getLocationsByID()
      .then((data) => {
        setAssetLocations(data);
      })
      .catch((error) => {
        console.error('error fetching data', error);
      });
  };
  useEffect(() => {
    // Get user diaplayName from firebase authentication
    const user = firebase.auth().currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }

    // Get user assets by UID
    getDevicesId();
    showAllLocationsID();
  }, []);

  return (
    <>
      <div>
        <ProfileCard userData={{ name: userName }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {assetLocations.map((locations) => (
          <LocationCard key={locations.firebaseKey} locationObj={locations} />
        ))}
      </div>

      <Link href="/Assets/new" passHref>
        <Button type="button">Add Managed Assets</Button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {userDevices.map((assets) => (
          <ProfileAssetCard key={assets.firebaseKey} assetObj={assets} onUpdate={getDevicesId} />
        ))}
      </div>
    </>
  );
}
