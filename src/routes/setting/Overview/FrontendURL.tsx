// import React from 'react'
import { useTranslation } from 'react-i18next';
import { useGetFrontendUrlQuery, useUpdateFrontendUrlMutation } from '../../../app/services/server';
import StyledInput from "../../../common/component/styled/Input";
import StyledButton from "../../../common/component/styled/Button";
import { ChangeEvent, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
// type Props = {}

const Index = () => {
    const { data, isSuccess: getUrlSuccess } = useGetFrontendUrlQuery();
    const [url, setUrl] = useState(location.origin);
    const { t } = useTranslation("setting");
    const { t: ct } = useTranslation();
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        // update
        setUrl(evt.target.value);
    };
    const handleUpdate = () => {
        updateUrl(url);
    };
    const [updateUrl, { isLoading, isSuccess }] = useUpdateFrontendUrlMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success("Update Successfully!");
        }
    }, [isSuccess]);
    useEffect(() => {
        if (getUrlSuccess && data) {
            setUrl(data);
        }
    }, [getUrlSuccess, data]);
    // if(!fetch)
    return (
        <div className="setting">
            <p className="label">{t("overview.url.title")}</p>
            <p className="tip">
                <span className="txt">
                    {t("overview.url.desc")}
                </span>
            </p>
            <div className="flex items-center gap-4 mt-4">

                <StyledInput placeholder='frontend url' value={url} onChange={handleChange} />
                <StyledButton disabled={!url || isLoading} className='' onClick={handleUpdate}> {ct("action.update")}</StyledButton>
            </div>
        </div>
    );
};

export default Index;