export async function POST(request) {
  try {
    const { email } = await request.json();
    
    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'X-Auth-Token': `api-key ${process.env.GETRESPONSE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        campaign: {
          campaignId: process.env.GETRESPONSE_LIST_ID
        },
        dayOfCycle: 0
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GetResponse error:', errorData);
      throw new Error(errorData.message || 'GetResponse API error');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to subscribe',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 