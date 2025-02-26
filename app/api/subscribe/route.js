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

    const data = await response.json();

    if (!response.ok) {
      // Check if it's a duplicate contact error
      if (data.httpStatus === 409 || data.code === 1008) {
        return new Response(JSON.stringify({ 
          error: 'Already subscribed',
          message: 'This email is already subscribed to our newsletter!'
        }), {
          status: 409,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      throw new Error(data.message || 'GetResponse API error');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to subscribe',
      message: 'Something went wrong. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 