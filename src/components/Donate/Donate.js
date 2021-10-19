import React from 'react';
import donate from '../../images/donate.jpg';

const Donate = () => {
    return (
        <div className="container mt-5">
            <div>
                <h1>Every people are welcomed to donate our hospital to treatment people.</h1>
                <h5>There are many ways to support our work across the country. Donate dollars, goods or vehicles and more. We can't fulfill our mission without you!</h5>
            </div>
            <div className="row mt-4">
                <div className="col-md-4 img-fluid">
                    <img className="img-fluid" src={donate} alt="" />
                </div>
                <div className="col-md-8 text-start">
                    <h4>Giving at its simplest</h4>
                    <p>It's simple to make a donation to your favourite causes using your credit or debit card, PayPal, your CAF Charity Account or CAF Charitable Trust.
                        When you donate to charity, your name and address will be passed onto the charitable organisation you’re giving to, unless you choose to remain anonymous. Keeping your identity to yourself is easy – simply tick the ‘Donate anonymously’ box when you select your donation amount.
                        You can search by name, registered number or keyword.</p>
                    <h4>Manage your giving with one online account</h4>
                    <p>Do you make lots of donations to charity? Or do you prefer to give every now and then? Whichever you choose, you can make your giving easier with a CAF Charity Account.

                        There are so many amazing charities to support so with all your giving in one place, it’s easier to keep track. And, when you open an account, if you’re a UK taxpayer, there’s only one Gift Aid Declaration to complete. We arrange for the Gift Aid to go into your account so you have even more to donate at no extra cost to you. You can choose to donate those extra funds to the charities you want to.

                        Find out more about the CAF Charity Account.</p>
                </div>
            </div>
        </div>

    );
};

export default Donate;