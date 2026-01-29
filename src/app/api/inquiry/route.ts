
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      college_id,
      candidate_name,
      candidate_mobile,
      candidate_email,
      parent_mobile,
      residential_address,
      twelfth_percentage,
      year_of_passing,
      twelfth_board
    } = body;

    // Simple validation
    if (!candidate_name || !candidate_mobile || !twelfth_percentage) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const percentage = parseFloat(twelfth_percentage);

    // Eligibility Check (Mock Criteria: >= 60 is eligible, < 60 is not, user example said < 35 rejected)
    // User Example: "criteria (e.g., percentage < 35)" -> Rejected.
    // Let's set the cut-off at 50% for this "Premium" college example, or stick to the 35% hard limit mentioned.
    // I will use 35% as the hard fail, and maybe 60% for "Merit" if I wanted to be fancy, 
    // but the requirement is simple: Eligible vs Not Eligible.
    // Let's go with 35% as the passing/eligibility mark.
    
    if (percentage < 35) {
      return NextResponse.json({
        success: false,
        message: 'Sorry, you are not eligible for admission as per the criteria (Minimum 35%).',
        inquiry_id: Math.floor(Math.random() * 1000)
      });
    }

    // "Save" to database (Mock)
    const newInquiryId = Math.floor(Math.random() * 10000);

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully! Our team will contact you shortly.',
      inquiry_id: newInquiryId
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server Error' },
      { status: 500 }
    );
  }
}
