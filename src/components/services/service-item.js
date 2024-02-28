import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from './service.module.scss';

function ServiceItem({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.mediumImage}`;
    const linkPath = `/services/${service?.slug}`;

    return (
        <div className="service-item">
            <Link href="/services/arquitectura" className={classes.img}>
                {/* href={linkPath} */}
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href="/services/arquitectura">{service?.title}</Link>
                    {/* <Link href={linkPath}>{service?.title}</Link> */}
                </h2>
                <div className={classes.icon}>
                    <Link href="/services/arquitectura">
                        {/* href={linkPath} */}
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
