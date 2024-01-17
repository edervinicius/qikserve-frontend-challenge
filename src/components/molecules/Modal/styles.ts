import styled from "styled-components";

export const StyledModal = styled.div`
    z-index: 9999;
    .close  {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
    }
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.65);
        z-index: 9998;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .modal {
        @media (max-width: 768px) {
            height: 100vh;
            display: flex;
            flex-direction: column;
            /* justify-content: space-between; */
            width: 100%;
        }
        min-height: 80%;
        position: fixed;
        background-color: #F8F9FA;
        max-width: 480px;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 9999;
        .details{
            box-shadow: 0px 1px 0px 0px #EEE;
            z-index: 1;
            position: relative;
            .photo {
                height: 320px;
                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;       
                }
            }
            .header {
                background-color: #fff;
                padding: 16px;
                text-align: left;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
                align-self: stretch; 
                .title{
                    h2{
                        color: #121212;
                        font-feature-settings: 'clig' off, 'liga' off;
                        font-size: 24px;
                        font-weight: 700;
                    }
                }
                .description {
                    p {
                        color: #464646;
                        font-feature-settings: 'clig' off, 'liga' off;
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: 0.5px;                 
                    }
                }
            }            
        }
        .modifiers {
            position: relative;
            z-index: 0;
            padding-bottom: 50px;
            max-height: 284px;
            overflow-y: scroll;
            .modifier {
                text-align: left;
                .header {
                    background: #F8F9FA;
                    display: flex;
                    padding: 16px 24px;
                    flex-direction: column;
                    align-items: flex-start;
                    align-self: stretch;
                    h3 {
                        color: #464646;
                        font-feature-settings: 'clig' off, 'liga' off;
                        font-size: 16px;
                        font-weight: 700;
                        letter-spacing: 0.5px; 
                    }
                    p {
                        color: #5F5F5F;
                        font-feature-settings: 'clig' off, 'liga' off;
                        font-size: 16px;
                        font-weight: 400;
                        letter-spacing: 0.5px; 
                    }
                }
                .items {
                    background: #fff;
                    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.10); 
                    .item {
                        display: flex; 
                        gap: 16px;
                        height: 72px;
                        padding: 16px 24px;
                        align-items: space-between;
                        align-self: stretch; 
                        .info {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            label {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: flex-start;
                                gap: 4px;
                                flex: 1 0 0;
                                align-self: stretch;
                                h4 {
                                    color: #121212;
                                    font-feature-settings: 'clig' off, 'liga' off;
                                    font-size: 16px;
                                    font-weight: 500;
                                }
                                p {
                                    color: #464646;
                                    font-feature-settings: 'clig' off, 'liga' off;
                                    font-size: 16px;
                                }
                            }
                        }
                        .option {
                            .radio {
                                width: 20px;
                                height: 20px;
                                border: 4px solid #5F5F5F;
                                border-radius: 50%;
                                appearance: none;
                                outline: none;
                                cursor: pointer;
                            }
                            .radio:checked {
                                background-color: #5F5F5F;
                            }
                        }
                    }
                }
            }
        }
        .addToCart{
            position: fixed;
            z-index: 9;
            bottom: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.30);
            backdrop-filter: blur(4px); 
            display: flex;
            padding: 8px 24px 24px 24px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            align-self: stretch; 
            .qtyWrapper {
                display: flex;
                margin: 0 auto;
                width: 143px;
                justify-content: center;
                align-items: center;
                gap: 16px;
                .button{
                    cursor: pointer;
                    &.disabled {
                        cursor: unset;
                    }
                }
            }
        }
    }
`