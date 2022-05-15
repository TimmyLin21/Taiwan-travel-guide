import jsSHA from 'jssha';
const FIREBASE_DOMAIN = 'https://taiwantravelguide-9465d-default-rtdb.asia-southeast1.firebasedatabase.app/';

// API驗證
function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
    let AppID = '93ad7bf1688a47a3a7f3c346d675d588';
    let AppKey = 'TCbubL4-YuFRXkJsNJ64FcGncG0';
//  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

export async function getFrontSites() {
  const response = await fetch(`${FIREBASE_DOMAIN}FrontSites.json`)
  const frontSites = await response.json();
  
  if (!response.ok) {
    throw new Error(frontSites.message || 'Could not get sites.');
  }

  return frontSites;
}

export async function getSiteInfo(requestInfo) {
  const {id, type} = requestInfo;
  const response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${type}?$filter=${type}ID eq '${id}'&$top=9&$format=JSON`,{
    method: 'GET',
    // headers: getAuthorizationHeader(),
  });
  const siteInfo = await response.json();

  if (!response.ok) {
    throw new Error(siteInfo.message || 'Could not get info.');
  }

  return siteInfo[0];
}

export async function getThreeActivities() {
  const response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$skip=5&$top=3&$format=JSON`,{
    method: 'GET',
    // headers: getAuthorizationHeader(),
  });
  const activities = await response.json();

  if (!response.ok) {
    throw new Error(activities.message || 'Could not get data.');
  }

  return activities; 
}

export async function getCultureSpots(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?filter=Class1 eq '文化類' or Class2 eq '文化類'&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?filter=Class1 eq '文化類' or Class2 eq '文化類'&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const spots = await response.json();

  if (!response.ok) {
    throw new Error(spots.message || 'Could not get data.');
  }

  return spots;
}

export async function getOutdoorSpots(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const spots = await response.json();

  if (!response.ok) {
    throw new Error(spots.message || 'Could not get data.');
  }

  return spots;
}

export async function getTempleSpots(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$filter=contains(ScenicSpotName,'寺')&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(ScenicSpotName,'寺')&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const spots = await response.json();

  if (!response.ok) {
    throw new Error(spots.message || 'Could not get data.');
  }

  return spots;  
}

export async function getFamilyActivities(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${city}?$filter=Class1 eq '藝文活動' or Class2 eq '藝文活動'&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Class1 eq '藝文活動' or Class2 eq '藝文活動'&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const activities = await response.json();

  if (!response.ok) {
    throw new Error(activities.message || 'Could not get data.');
  }

  return activities;  
}

export async function getScenicAreas(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$filter=Class1 eq '國家風景區類' or Class2 eq '國家風景區類'&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Class1 eq '國家風景區類' or Class2 eq '國家風景區類'&$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const areas = await response.json();

  if (!response.ok) {
    throw new Error(areas.message || 'Could not get data.');
  }

  return areas;  
}

export async function getRestaurants(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${city}?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const restaurants = await response.json();

  if (!response.ok) {
    throw new Error(restaurants.message || 'Could not get data.');
  }

  return restaurants;  
}

export async function getHotels(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${city}?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const hotels = await response.json();

  if (!response.ok) {
    throw new Error(hotels.message || 'Could not get data.');
  }

  return hotels;  
}

export async function getActivities(requestInfo) {
  const {city, page} =requestInfo;
  let response;
  if (city && city !== 'undefined') {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${city}?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  } else {
    response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=${page*9}&$format=JSON`,{
      method: 'GET',
      // headers: getAuthorizationHeader(),
    });
  }
  const activities = await response.json();

  if (!response.ok) {
    throw new Error(activities.message || 'Could not get data.');
  }

  return activities;  
}
export async function getNearbySpots(requestInfo) {
  const { type, position, id} = requestInfo;
  const response = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${type}?$filter=${type}ID ne '${id}'&$spatialFilter=nearby(${position.lat},${position.lon},5000)&$top=3&$format=JSON`,{
    method: 'GET',
    // headers: getAuthorizationHeader(),
  });
  const spots = await response.json();

  if (!response.ok) {
    throw new Error(spots.message || 'Could not get data.');
  }

  return spots;  
}


