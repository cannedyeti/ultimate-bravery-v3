import { Box, Center, Divider } from "@chakra-ui/react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

export function TooltipCard({header, body}) {
    const sanitize = DOMPurify.sanitize(body);

    return (
        <Box>
            <Center>{header}</Center>
                <Divider />
            <Center dangerouslySetInnerHTML={{ __html: sanitize }} />
        </Box>
    );
}

TooltipCard.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
};
