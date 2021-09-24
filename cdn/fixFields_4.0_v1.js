let  fix_fields_40={"1": {"name": "Account", "desc": "Account mnemonic as agreed between broker and institution.", "href": "tag_1_Account_.html"}, "2": {"name": "AdvId", "desc": "Unique identifier of Advertisement (7) message", "href": "tag_2_AdvId_.html"}, "3": {"name": "AdvRefID", "desc": "Reference identifier used with CANCEL and REPLACE transaction types.", "href": "tag_3_AdvRefID_.html"}, "4": {"name": "AdvSide", "desc": "Broker's side of advertised trade", "href": "tag_4_AdvSide_.html"}, "5": {"name": "AdvTransType", "desc": "Identifies Advertisement (7) message transaction type", "href": "tag_5_AdvTransType_.html"}, "6": {"name": "AvgPx", "desc": "Calculated average price of all fills on this order.", "href": "tag_6_AvgPx_.html"}, "7": {"name": "BeginSeqNo", "desc": "Message sequence number of first record in range to be resent", "href": "tag_7_BeginSeqNo_.html"}, "8": {"name": "BeginString", "desc": "Identifies beginning of new message and protocol version. ALWAYS FIRST FIELD IN MESSAGE. (Always unencrypted)", "href": "tag_8_BeginString_.html"}, "9": {"name": "BodyLength", "desc": "Message length, in bytes, is verified by counting the number of characters in the message following the BodyLength (9) field up to, and including, the delimiter immediately preceding the CheckSum (10) field. ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted) For example, for message 8=FIX 4.4^9=5^35=0^10=10^, the BodyLength is 5 for 35=0^", "href": "tag_9_BodyLength_.html"}, "10": {"name": "CheckSum", "desc": "Three byte, simple checksum (see Appendix B of FIX Specification for description). ALWAYS LAST FIELD IN RECORD; i.e. serves, with the trailing <SOH>, as the end-of-record delimiter. Always defined as three characters. (Always unencrypted)", "href": "tag_10_CheckSum_.html"}, "11": {"name": "ClOrdID", "desc": "Unique identifier for Order as assigned by institution. Uniqueness must be guaranteed within a single trading day. Firms which electronically submit multi-day orders should consider embedding a date within the ClOrdID (11) field to assure uniqueness across days.", "href": "tag_11_ClOrdID_.html"}, "12": {"name": "Commission", "desc": "Commission", "href": "tag_12_Commission_.html"}, "13": {"name": "CommType", "desc": "Commission type", "href": "tag_13_CommType_.html"}, "14": {"name": "CumQty", "desc": "Total number of shares filled.", "href": "tag_14_CumQty_.html"}, "15": {"name": "Currency", "desc": "Identifies currency used for price, Absence of this field in a message is interpreted as US dollars. See Appendix A of FIX Specification for information on obtaining valid values.", "href": "tag_15_Currency_.html"}, "16": {"name": "EndSeqNo", "desc": "Message sequence number of last record in range to be resent. If request is for a single record BeginSeqNo (7) = EndSeqNo (16) . If request is for all messages subsequent to a particular message, EndSeqNo (16) = '999999'", "href": "tag_16_EndSeqNo_.html"}, "17": {"name": "ExecID", "desc": "Unique identifier of execution message as assigned by broker (will be 0 (zero) for ExecTransType (20) =3 (Status)).", "href": "tag_17_ExecID_.html"}, "18": {"name": "ExecInst", "desc": "Instructions for order handling on exchange trading floor. If more than one instruction is applicable to an order, this field can contain multiple instructions separated by space.", "href": "tag_18_ExecInst_.html"}, "19": {"name": "ExecRefID", "desc": "Reference identifier used with Cancel and Correct transaction types.", "href": "tag_19_ExecRefID_.html"}, "20": {"name": "ExecTransType", "desc": "Identifies transaction type", "href": "tag_20_ExecTransType_.html"}, "21": {"name": "HandlInst", "desc": "Instructions for order handling on Broker trading floor", "href": "tag_21_HandlInst_.html"}, "22": {"name": "IDSource", "desc": "Identifies class of alternative SecurityID (48)", "href": "tag_22_IDSource_.html"}, "23": {"name": "IOIid", "desc": "Unique identifier of Indication of Interest (6) message.", "href": "tag_23_IOIid_.html"}, "24": {"name": "IOIOthSvc", "desc": "Indicates if, and on which other services, the indication has been advertised. Each character represents an additional service (e.g. if on Bridge and Autex, field = BA, if only on Autex, field = A)", "href": "tag_24_IOIOthSvc_.html"}, "25": {"name": "IOIQltyInd", "desc": "Relative quality of indication", "href": "tag_25_IOIQltyInd_.html"}, "26": {"name": "IOIRefID", "desc": "Reference identifier used with CANCEL and REPLACE, transaction types.", "href": "tag_26_IOIRefID_.html"}, "27": {"name": "IOIShares", "desc": "Number of shares in numeric or relative size.", "href": "tag_27_IOIShares_.html"}, "28": {"name": "IOITransType", "desc": "Identifies Indication of Interest (6) message transaction type", "href": "tag_28_IOITransType_.html"}, "29": {"name": "LastCapacity", "desc": "Broker capacity in order execution", "href": "tag_29_LastCapacity_.html"}, "30": {"name": "LastMkt", "desc": "Market of execution for last fill", "href": "tag_30_LastMkt_.html"}, "31": {"name": "LastPx", "desc": "Price of last fill. Field not required for ExecTransType (20) = 3 (Status)", "href": "tag_31_LastPx_.html"}, "32": {"name": "LastShares", "desc": "Quantity of shares bought/sold on this fill. Field not required for ExecTransType (20) = 3 (Status)", "href": "tag_32_LastShares_.html"}, "33": {"name": "LinesOfText", "desc": "Identifies number of lines of text body", "href": "tag_33_LinesOfText_.html"}, "34": {"name": "MsgSeqNum", "desc": "Integer message sequence number.", "href": "tag_34_MsgSeqNum_.html"}, "35": {"name": "MsgType", "desc": "Defines message type. ALWAYS THIRD FIELD IN MESSAGE. (Always unencrypted)", "href": "tag_35_MsgType_.html"}, "36": {"name": "NewSeqNo", "desc": "New sequence number", "href": "tag_36_NewSeqNo_.html"}, "37": {"name": "OrderID", "desc": "Unique identifier for Order as assigned by broker. Uniqueness must be guaranteed within a single trading day. Firms which accept multi-day orders should consider embedding a date within the OrderID (37) field to assure uniqueness across days.", "href": "tag_37_OrderID_.html"}, "38": {"name": "OrderQty", "desc": "Number of shares ordered", "href": "tag_38_OrderQty_.html"}, "39": {"name": "OrdStatus", "desc": "Identifies current status of order.", "href": "tag_39_OrdStatus_.html"}, "40": {"name": "OrdType", "desc": "Order type.", "href": "tag_40_OrdType_.html"}, "41": {"name": "OrigClOrdID", "desc": "Original order id as assigned by the institution, used to identify original order in cancel and cancel/replace requests.", "href": "tag_41_OrigClOrdID_.html"}, "42": {"name": "OrigTime", "desc": "Time of message origination (always expressed in GMT)", "href": "tag_42_OrigTime_.html"}, "43": {"name": "PossDupFlag", "desc": "Indicates possible retransmission of message with this sequence number", "href": "tag_43_PossDupFlag_.html"}, "44": {"name": "Price", "desc": "Price per share", "href": "tag_44_Price_.html"}, "45": {"name": "RefSeqNum", "desc": "Reference message sequence number", "href": "tag_45_RefSeqNum_.html"}, "46": {"name": "RelatdSym", "desc": "Symbol of issue related to story. Can be repeated within message to identify multiple companies.", "href": "tag_46_RelatdSym_.html"}, "47": {"name": "Rule80A", "desc": "Indicates order type upon which exchange Rule 80A is applied.", "href": "tag_47_Rule80A_.html"}, "48": {"name": "SecurityID", "desc": "CUSIP or other alternate security identifier", "href": "tag_48_SecurityID_.html"}, "49": {"name": "SenderCompID", "desc": "Assigned value used to identify firm sending message.", "href": "tag_49_SenderCompID_.html"}, "50": {"name": "SenderSubID", "desc": "Assigned value used to identify specific message originator (desk, trader, etc.)", "href": "tag_50_SenderSubID_.html"}, "52": {"name": "SendingTime", "desc": "Time of message transmission (always expressed in GMT)", "href": "tag_52_SendingTime_.html"}, "53": {"name": "Shares", "desc": "Number of shares", "href": "tag_53_Shares_.html"}, "54": {"name": "Side", "desc": "Side of order", "href": "tag_54_Side_.html"}, "55": {"name": "Symbol", "desc": "Ticker symbol", "href": "tag_55_Symbol_.html"}, "56": {"name": "TargetCompID", "desc": "Assigned value used to identify receiving firm.", "href": "tag_56_TargetCompID_.html"}, "57": {"name": "TargetSubID", "desc": "Assigned value used to identify specific individual or unit intended to receive message. 'ADMIN' reserved for administrative messages not intended for a specific user.", "href": "tag_57_TargetSubID_.html"}, "58": {"name": "Text", "desc": "Free format text string", "href": "tag_58_Text_.html"}, "59": {"name": "TimeInForce", "desc": "Specifies how long the order remains in effect. Absence of this field is interpreted as DAY.", "href": "tag_59_TimeInForce_.html"}, "60": {"name": "TransactTime", "desc": "Time of execution/order creation (expressed in GMT)", "href": "tag_60_TransactTime_.html"}, "61": {"name": "Urgency", "desc": "Urgency flag", "href": "tag_61_Urgency_.html"}, "62": {"name": "ValidUntilTime", "desc": "Indicates expiration time of indication message (always expressed in GMT)", "href": "tag_62_ValidUntilTime_.html"}, "63": {"name": "SettlmntTyp", "desc": "Indicates order settlement period. Absence of this field is interpreted as Regular. Regular is defined as the default settlement period for the particular security on the exchange of execution.", "href": "tag_63_SettlmntTyp_.html"}, "64": {"name": "FutSettDate", "desc": "Specific date of trade settlement in YYYYMMDD format. Required when SettlmntTyp (63) = 6 (Future) or SettlmntTyp (63) = 8 (Sellers Option). (expressed in local time at place of settlement)", "href": "tag_64_FutSettDate_.html"}, "65": {"name": "SymbolSfx", "desc": "Additional information about the security (e.g. preferred, warrants, etc.). Absence of this field indicates common.", "href": "tag_65_SymbolSfx_.html"}, "66": {"name": "ListID", "desc": "Customer assigned listUnique identifier for list as assigned by institution, used to associate multiple individual orders. Uniqueness must be guaranteed within a single trading day. Firms which generate multi-day orders should consider embedding a date within the ListID (66) field to assure uniqueness across days.", "href": "tag_66_ListID_.html"}, "67": {"name": "ListSeqNo", "desc": "Sequence of individual order within list (i.e. ListSeqNo (67) of ListNoOrds (68) , 2 of 25, 3 of 25, . . . )", "href": "tag_67_ListSeqNo_.html"}, "68": {"name": "ListNoOrds", "desc": "Total number of orders within list (i.e. ListSeqNo (67) of TotNoOrders (68) , e.g. 2 of 25, 3 of 25, . . . )", "href": "tag_68_ListNoOrds_.html"}, "69": {"name": "ListExecInst", "desc": "Free format text message containing list handling and execution instructions.", "href": "tag_69_ListExecInst_.html"}, "70": {"name": "AllocID", "desc": "Unique identifier for allocation record.", "href": "tag_70_AllocID_.html"}, "71": {"name": "AllocTransType", "desc": "Identifies allocation transaction type", "href": "tag_71_AllocTransType_.html"}, "72": {"name": "RefAllocID", "desc": "Reference identifier to be used with Replace and Cancel AllocTransType (71) records.", "href": "tag_72_RefAllocID_.html"}, "73": {"name": "NoOrders", "desc": "Indicates number of orders to be combined for average pricing and allocation.", "href": "tag_73_NoOrders_.html"}, "74": {"name": "AvgPrxPrecision", "desc": "Indicates number of decimal places to be used for average pricing. Absence of this field indicates that default precision arranged by the broker/institution is to be used.", "href": "tag_74_AvgPrxPrecision_.html"}, "75": {"name": "TradeDate", "desc": "Indicates date of trade referenced in this record in YYYYMMDD format. Absence of this field indicates current day (expressed in local time at place of trade).", "href": "tag_75_TradeDate_.html"}, "76": {"name": "ExecBroker", "desc": "Identifies executing/give-up broker. Standard NASD market-maker mnemonic is preferred.", "href": "tag_76_ExecBroker_.html"}, "77": {"name": "OpenClose", "desc": "For options only.", "href": "tag_77_OpenClose_.html"}, "78": {"name": "NoAllocs", "desc": "Number of AllocAccount (79) / AllocQty (80) / ProcessCode (81) instances included in allocation record.", "href": "tag_78_NoAllocs_.html"}, "79": {"name": "AllocAccount", "desc": "Sub-account mnemonic", "href": "tag_79_AllocAccount_.html"}, "80": {"name": "AllocShares", "desc": "Number of shares to be allocated to specific sub-account", "href": "tag_80_AllocShares_.html"}, "81": {"name": "ProcessCode", "desc": "Processing code for sub-account. Absence of this field in AllocAccount (79) / AllocQty (80) / ProcessCode (81) instance indicates regular trade.", "href": "tag_81_ProcessCode_.html"}, "82": {"name": "NoRpts", "desc": "Total number of reports within series.", "href": "tag_82_NoRpts_.html"}, "83": {"name": "RptSeq", "desc": "Sequence number of message within report series.", "href": "tag_83_RptSeq_.html"}, "84": {"name": "CxlQty", "desc": "Total number of shares canceled for this order.", "href": "tag_84_CxlQty_.html"}, "85": {"name": "NoDlvyInst", "desc": "Number of delivery instruction fields to follow", "href": "tag_85_NoDlvyInst_.html"}, "86": {"name": "DlvyInst", "desc": "Free format text field to indicate delivery instructions", "href": "tag_86_DlvyInst_.html"}, "87": {"name": "AllocStatus", "desc": "Identifies status of allocation.", "href": "tag_87_AllocStatus_.html"}, "88": {"name": "AllocRejCode", "desc": "Identifies reason for rejection.", "href": "tag_88_AllocRejCode_.html"}, "89": {"name": "Signature", "desc": "Electronic signature", "href": "tag_89_Signature_.html"}, "90": {"name": "SecureDataLen", "desc": "Length of encrypted message", "href": "tag_90_SecureDataLen_.html"}, "91": {"name": "SecureData", "desc": "Actual encrypted data stream", "href": "tag_91_SecureData_.html"}, "92": {"name": "BrokerOfCredit", "desc": "Broker to receive trade credit", "href": "tag_92_BrokerOfCredit_.html"}, "93": {"name": "SignatureLength", "desc": "Number of bytes in signature field.", "href": "tag_93_SignatureLength_.html"}, "94": {"name": "EmailType", "desc": "Email message type.", "href": "tag_94_EmailType_.html"}, "95": {"name": "RawDataLength", "desc": "Number of bytes in raw data field.", "href": "tag_95_RawDataLength_.html"}, "96": {"name": "RawData", "desc": "Unformatted raw data, can include bitmaps, word processor documents, etc.", "href": "tag_96_RawData_.html"}, "97": {"name": "PossResend", "desc": "Indicates that message may contain information that has been sent under another sequence number.", "href": "tag_97_PossResend_.html"}, "98": {"name": "EncryptMethod", "desc": "Method of encryption.", "href": "tag_98_EncryptMethod_.html"}, "99": {"name": "StopPx", "desc": "Price per share", "href": "tag_99_StopPx_.html"}, "100": {"name": "ExDestination", "desc": "Execution destination as defined by institution when order is entered.", "href": "tag_100_ExDestination_.html"}, "102": {"name": "CxlRejReason", "desc": "Code to identify reason for cancel rejection.", "href": "tag_102_CxlRejReason_.html"}, "103": {"name": "OrdRejReason", "desc": "Code to identify reason for order rejection.", "href": "tag_103_OrdRejReason_.html"}, "104": {"name": "IOIQualifier", "desc": "Code to qualify Indication of Interest (6) use.", "href": "tag_104_IOIQualifier_.html"}, "105": {"name": "WaveNo", "desc": "Identifier to aid in the management of multiple lists derived from a single, master list.", "href": "tag_105_WaveNo_.html"}, "106": {"name": "Issuer", "desc": "Company name of security issuer (e.g. International Business Machines)", "href": "tag_106_Issuer_.html"}, "107": {"name": "SecurityDesc", "desc": "Security description.", "href": "tag_107_SecurityDesc_.html"}, "108": {"name": "HeartBtInt", "desc": "Heartbeat interval (seconds)", "href": "tag_108_HeartBtInt_.html"}, "109": {"name": "ClientID", "desc": "Firm identifier used in third party-transactions.", "href": "tag_109_ClientID_.html"}, "110": {"name": "MinQty", "desc": "Minimum quantity of an order to be executed.", "href": "tag_110_MinQty_.html"}, "111": {"name": "MaxFloor", "desc": "Maximum number of shares within an order to be shown on the exchange floor at any given time.", "href": "tag_111_MaxFloor_.html"}, "112": {"name": "TestReqID", "desc": "Identifier included in Test Request (1) message to be returned in resulting Heartbeat (0)", "href": "tag_112_TestReqID_.html"}, "113": {"name": "ReportToExch", "desc": "Identifies party of trade responsible for exchange reporting.", "href": "tag_113_ReportToExch_.html"}, "114": {"name": "LocateReqd", "desc": "Indicates whether the broker is to locate the stock in conjuction with a short sell order.", "href": "tag_114_LocateReqd_.html"}, "115": {"name": "OnBehalfOfCompID", "desc": "Assigned value used to identify firm originating message if the message was delivered by a third party i.e. the third party firm identifier would be delivered in the SenderCompID (49) field and the firm originating the message in this field.", "href": "tag_115_OnBehalfOfCompID_.html"}, "116": {"name": "OnBehalfOfSubID", "desc": "Assigned value used to identify specific message originator (desk, trader, etc.) if the message was delivered by a third party", "href": "tag_116_OnBehalfOfSubID_.html"}, "117": {"name": "QuoteID", "desc": "Unique identifier for quote", "href": "tag_117_QuoteID_.html"}, "118": {"name": "NetMoney", "desc": "Total amount due as the result of the transaction (e.g. for Buy order - principal + commission + fees) reported in currency of execution.", "href": "tag_118_NetMoney_.html"}, "119": {"name": "SettlCurrAmt", "desc": "Total amount due expressed in settlement currency (includes the effect of the forex transaction)", "href": "tag_119_SettlCurrAmt_.html"}, "120": {"name": "SettlCurrency", "desc": "Currency code of settlement denomination.", "href": "tag_120_SettlCurrency_.html"}, "121": {"name": "ForexReq", "desc": "Indicates request for forex accommodation trade to be executed along with security transaction.", "href": "tag_121_ForexReq_.html"}, "122": {"name": "OrigSendingTime", "desc": "Original time of message transmission (always expressed in GMT) when transmitting orders as the result of a resend request.", "href": "tag_122_OrigSendingTime_.html"}, "123": {"name": "GapFillFlag", "desc": "Indicates that the Sequence Reset (4) message is replacing administrative or application messages which will not be resent.", "href": "tag_123_GapFillFlag_.html"}, "124": {"name": "NoExecs", "desc": "No of execution record groups to follow.", "href": "tag_124_NoExecs_.html"}, "125": {"name": "CxlType", "desc": "Defines if cancel is for part or all of the remaining quantity of an order.", "href": "tag_125_CxlType_.html"}, "126": {"name": "ExpireTime", "desc": "Time/Date of order expiration (always expressed in GMT)", "href": "tag_126_ExpireTime_.html"}, "127": {"name": "DKReason", "desc": "Reason for execution rejection.", "href": "tag_127_DKReason_.html"}, "128": {"name": "DeliverToCompID", "desc": "Assigned value used to identify the firm targeted to receive the message if the message is delivered by a third party i.e. the third party firm identifier would be delivered in the TargetCompID (56) field and the ultimate receiver firm ID in this field.", "href": "tag_128_DeliverToCompID_.html"}, "129": {"name": "DeliverToSubID", "desc": "Assigned value used to identify specific message recipient (desk, trader, etc.) if the message is delivered by a third party", "href": "tag_129_DeliverToSubID_.html"}, "130": {"name": "IOINaturalFlag", "desc": "Indicates that Indication of Interest (6) is the result of an existing agency order or a facilitation position resulting from an agency order, not from principal trading or order solicitation activity.", "href": "tag_130_IOINaturalFlag_.html"}, "131": {"name": "QuoteReqID", "desc": "Unique identifier for Quote Request (R)", "href": "tag_131_QuoteReqID_.html"}, "132": {"name": "BidPx", "desc": "Bid price/rate", "href": "tag_132_BidPx_.html"}, "133": {"name": "OfferPx", "desc": "Offer price/rate", "href": "tag_133_OfferPx_.html"}, "134": {"name": "BidSize", "desc": "Quantity of bid", "href": "tag_134_BidSize_.html"}, "135": {"name": "OfferSize", "desc": "Quantity of offer", "href": "tag_135_OfferSize_.html"}, "136": {"name": "NoMiscFees", "desc": "Number of repeating groups of miscellaneous fees", "href": "tag_136_NoMiscFees_.html"}, "137": {"name": "MiscFeeAmt", "desc": "Miscellaneous fee value", "href": "tag_137_MiscFeeAmt_.html"}, "138": {"name": "MiscFeeCurr", "desc": "Currency of miscellaneous fee", "href": "tag_138_MiscFeeCurr_.html"}, "139": {"name": "MiscFeeType", "desc": "Indicates type of miscellaneous fee.", "href": "tag_139_MiscFeeType_.html"}, "140": {"name": "PrevClosePx", "desc": "Previous closing price of security.", "href": "tag_140_PrevClosePx_.html"}}