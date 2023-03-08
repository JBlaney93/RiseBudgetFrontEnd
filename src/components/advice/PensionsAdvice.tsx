const PensionsAdvice = () => {

    return (
        <div className='advice-details-container'>
            <h1 className='advice-title'>Pensions</h1>
            <p className='advice-paragraph'>
                The first piece of advice is start saving into a pension as soon as possible.
                In Scotland if you are over 21 there is automatic enrollment into your workplace pension scheme.
                If you are under 21 you will have to opt in. It is recommended to start saving as soon as possible.
            </p>
            <p className='advice-paragraph'>
                Did you know?
                The maximum state pension in 2022/23 is £185.15 per week or £9,628 per year!
                This is a lot less than most people hope to retire on.
            </p>
            <p className='advice-more'>
                <li>
                    You can read more about pensions here:
                </li>
                <li>
                    <a className='link-advice' href="https://www.gov.uk/government/news/pension-tips-for-teenagers">
                        gov.uk pension advice for teenagers
                    </a>
                </li>
                <li>
                    <a className='link-advice' href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pensions-basics">
                        Pension basics for young adults
                    </a>
                </li>
                <li>
                    <a className='link-advice' href="https://www.citizensadvice.org.uk/debt-and-money/pensions/">
                        Citizen's Advice infomation on pensions
                    </a>
                </li>
            </p>
        </div>
    );
};

export default PensionsAdvice;